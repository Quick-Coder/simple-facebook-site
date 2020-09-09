import React, { useState } from 'react';
import style from './Field.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper,faTv ,} from '@fortawesome/free-solid-svg-icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import EventIcon from '@material-ui/icons/Event';
import PagesIcon from '@material-ui/icons/Pages';
import GroupIcon from '@material-ui/icons/Group';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CloudIcon from '@material-ui/icons/Cloud';
import WorkIcon from '@material-ui/icons/Work';
import fakeData from '../../fakeData/index';
import Friends from '../Friends/Friends';

const Field = () => {
    const [friends,setFriend]=useState(fakeData);
    const [add, setAdd]=useState([]);
    // button clicked handler
    const addFriend=(friends)=>{
        console.log('Clicked Me')
        const newAdd=[...add,friends];
        setAdd(newAdd);
    }
    //Sellary calculation
        const total = add.reduce((total, arf)=> total+arf.sellary,0);
    return (
    <div>
        <div className="row">
            <div className="col-md-2 pl-5 text-primary flex-column media ">
                <p><FontAwesomeIcon icon={faNewspaper} /> News feed</p>
                <p><FontAwesomeIcon icon={faTv} /> Watch</p>
                <p><FacebookIcon/> Welcome</p>
                <p><EventIcon/> Events</p>
                <p><PagesIcon/>Pages</p>
                <p><GroupIcon/>Group</p>
                <p><LiveTvIcon/>Live</p>
                <p><CloudIcon/>Weather</p>
                <p><WorkIcon/>Jobs</p>
                <p><SportsEsportsIcon/>Games</p>
            </div>
                <div className="col-md-8">                    
                    <h2>Add People You Know</h2>
                    {
                        friends.map(frd=><Friends addFriend={addFriend} friends={frd}></Friends>)
                    }
                </div>
                <div className="media d-flex flex-column col-md-2">
                    <h4>Add info</h4>
                    <h5>Add items:{add.length}</h5>
                    <h5>Stipend:{total}</h5>
                    <h2>Total:{total}</h2>
                </div>
            </div>
        </div>
    );
};

export default Field;
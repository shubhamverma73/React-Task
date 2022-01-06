import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import PopularDay from './graph/PopularDay';
import PopularHour from './graph/PopularHour';
import PopularDevice from './graph/PopularDevice';
import Connections from './graph/Connections';

const Dashboard = () => {

    document.title = 'Dashboard';

    return (
        <>
            {
                <div>
                    <div className="content-wrapper"  style={{paddingTop: "87px"}}>        
                        <section className="content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="box box-primary">
                                        <div className="row">
                                            <div className="box-body">
                                            <div className="col-md-6 text-left">
                                                <span style={{fontWeight: "bold", fontSize: "19px"}}>Connections</span><br/>
                                                <span style={{fontSize: "15px"}}>14,600 total scans &nbsp;&nbsp;&nbsp; 
                                                <span style={{fontSize: "15px", background: "#dcf9ed", padding: "5px", color: "green"}}>
                                                    <FontAwesomeIcon icon={faLongArrowAltUp }/>11%
                                                </span>
                                                </span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <span>August 16, 2021</span>
                                            </div><br/><br/><br/><br/>
                                                <Connections />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                            <div className="row">
                                    <div className="col-md-12">
                                        <div className="box box-primary">
                                            <div className="row">
                                                <div className="box-body">
                                                    <div className="col-md-4 text-left">
                                                        <PopularDay />
                                                    </div>
                                                    <div className="col-md-4 text-right">
                                                        <span style={{fontWeight: "bold", fontSize: "18px"}}>Most Popular Hour of the day</span>
                                                        <PopularHour />
                                                    </div> 
                                                    <div className="col-md-4">
                                                        <span style={{fontWeight: "bold", fontSize: "18px"}}>Most Popular Device Type</span>
                                                        <PopularDevice />
                                                    </div>                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </div>
                </div>
            }
        </>
    );
}

export default Dashboard;
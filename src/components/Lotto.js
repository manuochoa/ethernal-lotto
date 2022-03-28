import { useState } from 'react';
import Select from './common/Select';
import graphLogo from '../assets/images/graph-logo.png';

export default function Lotto() {
    const [list, setList] = useState([
        { title: "EFlotto", selected: true, icon: graphLogo, id: 0 },
        { title: "EFlotto", selected: false, icon: graphLogo, id: 1 }
    ]);

    return (
        <div className="lotto">
            <div className="lotto__header">
                <h1 className="lotto__title">Lotto</h1>
            </div>
            <div className="lotto__body">
                <div className="lotto__cost">
                    <span>Cost:</span> <span>0.1227 EFlotto</span> - <span>5% discount</span>
                </div>
                <div className="lotto__background lotto__columns">
                    <div className="lotto__column">
                        <div className="lotto__row">
                            <span>Buy Tickets</span>
                            <span>Your Tickets: <strong>5</strong></span>
                        </div>
                        <strong>2</strong>
                    </div>
                    <div className="lotto__column">
                        <div className="lotto__row">
                            <span>Currency</span>
                            <span>Balance: <strong>5.00123</strong></span>
                        </div>
                        <Select list={list} setList={(index) => setList(state => state.map((item, itemIndex) => ({ ...item, selected: itemIndex === index ? true : false })))}  />
                    </div>
                </div>
                <p className="lotto__error">Not enough balance...</p>
                <button className="lotto__button button">Buy Tickets</button>
                <div className="lotto__background lotto__info">
                    <div className="lotto__title">Information</div>
                    <ul className="lotto__list">
                        <li className="lotto__item">
                            <span>Holders Pot</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Results Log</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Get Countdown</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Round Duration</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Get My Entries</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Round Entries</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Max Entries Per Transaction</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Start Time</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Minimum Entries</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Ticket Price</span>
                            <span>********</span>
                        </li>
                        <li className="lotto__item">
                            <span>Next Round Pot</span>
                            <span>********</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

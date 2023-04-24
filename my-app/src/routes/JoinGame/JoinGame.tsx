import './JoinGame.css';
import { Typography } from '@mui/material';
import { Link, Route, Routes, useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar';
import React, {Fragment, useEffect, useState} from 'react';
import cardBack from './Card_Back.jpg'
import { resolve } from 'path';

type Deck = {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}
type Card = {
    code: string;
    image: string;
    images: [string, string];
    value: string;
    suit: string;
}
type Deal = {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
}


export default function DisplayNewGame(props: any): JSX.Element {
    const [pCards, setPCard] = useState<Card[]>([]) //player cards
    const [cCards, setCCard] = useState<Card[]>([]) //community cards


    const location = useLocation();
    const name  = location.state.playername;
    const gamecode = location.state.gamecode;
    
    function createDeck(): Promise<Deck> {
        return new Promise<Deck>(async (resolve, reject) => {
            const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            if (response.ok){
                let deckTemp: Deck = await response.json();
                resolve(deckTemp)
            }
            else{reject("Didn't Work")}
        })
    }
    
    let deck = createDeck();
    let deckID: string;
    deck.then(info => {console.log(info);
        deckID = info.deck_id;});
    deck.catch(bad => {console.log(bad)
        deckID = "none";})
    function test() {
        alert(`Name: ${name} \nGamecode: ${gamecode}`);
    }

    console.log(deck);

    const dealPlayer = () => {
        console.log(deckID);
        function dealToPlayer(): Promise<Deal> {
            return new Promise<Deal>(async (resolve, reject) => {
                let apiCall = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=2"
                const response = await fetch(apiCall);
                if (response.ok){
                    let cardsInfo: Deal = await response.json();
                    resolve(cardsInfo)
                }
                else{reject("Didn't Work")}
            })
        }

        
        let cards = dealToPlayer();
        
        //console.log(cards);
        cards.then(info => { console.log(info);
            setPCard(info.cards);});
        cards.catch(bad => {console.log(bad);})
    }

    const dealFlop = () => {
        function dealToCommunity(): Promise<Deal> {
            return new Promise<Deal>(async (resolve, reject) => {
                let apiCall = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=3"
                const response = await fetch(apiCall);
                if (response.ok){
                    let cardsInfo: Deal = await response.json();
                    resolve(cardsInfo)
                }
                else{reject("Didn't Work")}
            })
        }
        
        let cards = dealToCommunity();
        
        //console.log(cards);
        cards.then(info => { console.log(info);
            setCCard(info.cards);});
        cards.catch(bad => {console.log(bad);})
    }

    const dealTurnRiver = () => {
        function dealToCommunity(): Promise<Deal> {
            return new Promise<Deal>(async (resolve, reject) => {
                let apiCall = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/?count=1"
                const response = await fetch(apiCall);
                if (response.ok){
                    let cardsInfo: Deal = await response.json();
                    resolve(cardsInfo)
                }
                else{reject("Didn't Work")}
            })
        }

        let card = dealToCommunity();
        
        //console.log(cards);
        card.then(info => { setCCard((prevState) => ([
            ...prevState,
            ...info.cards
        ]))})
        card.catch(bad => {console.log(bad);})
    }

    return(
        <div className="backgroundImage2">
            <Navbar status='in game'/>            
            <div className='tableJ'>
                <Typography variant='h2' color='white'>{gamecode}</Typography>
                <div className='comunityCards'>
                    {cCards.map(card => (
                        <div className='playerCards'>
                           <img src={card.image} height={50}/>
                        </div>
                    ))}
                    <button onClick={dealFlop}>Flop</button>
                    <button onClick={dealTurnRiver}>Turn</button>
                    <button onClick={dealTurnRiver}>River</button>
                </div>
                <div className='pot'>
                    <Typography variant="h1" color="black">POT</Typography>
                </div>
                <div className='you'>
                    <Typography variant='h4' color='white'>{name}</Typography>
                    {pCards.map(card => (
                        <div className='playerCards'>
                           <img src={card.image} height={50}/>
                        </div>
                    ))}
                    <button onClick={dealPlayer}>Ready</button>
                </div>
            </div>
        </div>

        
    );
}

function deckUpdate(deckInfo: any): any {
    throw new Error('Function not implemented.');
}

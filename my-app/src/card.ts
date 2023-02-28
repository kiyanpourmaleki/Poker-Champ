// enum for types (suits)
// testing
enum Suit { 
    Spades,
    Clubs,
    Hearts,
    Diamonds,
};

class Card {
    // ranks and types (suits)
    public readonly rank: number;
    public readonly suit: number;
    public constructor (rank: number, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }

    // types of cards
    private static rankNames = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King',
    ]

    public get rankName (): string {
        // -1 because stored in array thus starts from 0. 
        return Card.rankNames[this.rank - 1]; 
    }
    
    public get suitName (): string {
        return Suit[this.suit];
    }
};
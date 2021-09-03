import React, {Component} from 'react'
import { FlatList, Text, View } from 'react-native';
//import ExpenseItem from './ExpenseItem';
import { ListItem, Card} from 'react-native-elements'



class ExpenseList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            expenses: [
                { id: 12, name: 'shopping', cost: 40 },
                { id: 13, name: 'holiday', cost: 400 },
                { id: 14, name: 'car service', cost: 50 },
            ]
        }
    }
    /*
    renderItem ({item}) {
        return ( <ListItem title={item.name} content={item.cost} id={item.id}/>)
    }
    */
    render() {
        const renderItem = ({item}) => {
            return  (<ListItem title={item.name} subtitle={item.cost} id={item.id}/>);
        }
        return (
            <View style={{flex: 1, borderColor: 'red'}}>
                <Text>FlatList after this:</Text>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={this.state.expenses}
                    renderItem={renderItem}
                    
                />
                <Text>I am loading</Text>
            </View>
        )
    }
}

export default ExpenseList;
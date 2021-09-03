import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Budget from './Budget';
import Current from './Current';
import ExpenseList from './ExpenseList';
import Expenses from './Expenses';

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text>Expense Calculator</Text>
            <View>
                <View>
                    <Budget />
                </View>
                <View>
                    <Current />
                </View>
                <View style={{flex: 1}}>
                    <Expenses />
                    <ExpenseList />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
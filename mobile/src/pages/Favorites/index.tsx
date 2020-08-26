import React, { useState, useEffect } from 'react'
import { View, ScrollView, AsyncStorage } from 'react-native'
import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import styles from './styles'


function Favorites() {

    function loadFavorites() {

        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers)
            }
        })

    }
    useEffect(() => {
        loadFavorites();
    }, [])

    const [favorites, setFavorites] = useState([]);
    return <View style={styles.container} >
        <PageHeader title={"Meus Proffys Favoritos"} />
        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
            {favorites.map((teacher: Teacher) => {
                return (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    />
                )
            })}
        </ScrollView>

    </View>
}

export default Favorites;
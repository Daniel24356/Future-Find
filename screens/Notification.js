// import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import React from 'react';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Entypo from '@expo/vector-icons/Entypo';

// const NotificationItem = ({ imageSource, title, description, time }) => {
//     return (
//         <View style={styles.todayText}>
//             <Image source={imageSource} style={styles.centeredImage} />
//             <View style={styles.textContainer}>
//                 <Text style={styles.boldText}>{title}</Text>
//                 <Text>{description}</Text>
//             </View>
//             {time ? <Text>{time}</Text> : <Entypo name="chevron-small-right" size={24} color="black" />}
//         </View>
//     );
// };

// const Notification = () => {
//     return (
//         <View style={styles.container}>
//             {/* Header Section */}
//             <View style={styles.con_two}>
//                 <View style={styles.innerconttwo}>
//                     <View style={styles.wrapper}>
//                         <View style={styles.smallBox}>
//                             <Ionicons name="chevron-back" size={20} color="black" />
//                         </View>
//                         <Text style={styles.pay}>Notifications</Text>
//                     </View>
//                     <View style={styles.wrapper}>
//                         <View style={styles.smallBox}>
//                             <Ionicons name="settings-sharp" size={24} color="#6C727F" />
//                         </View>
//                     </View>
//                 </View>
//             </View>

//             {/* Notification List */}
//             <ScrollView style={styles.partTwo}>
//                 {/* Today */}
//                 <View style={styles.today}>
//                     <Text style={styles.sectionTitle}>Today</Text>
//                     <NotificationItem 
//                         imageSource={require('../assets/greenircle.png')}
//                         title="50% Cashback"
//                         description="Get 50% cashback for Bet account funding"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/greenircle.png')}
//                         title="50% Cashback"
//                         description="Get 50% cashback for Bet account funding"
//                     />
//                 </View>

//                 {/* Yesterday */}
//                 <View style={styles.today}>
//                     <Text style={styles.sectionTitle}>Yesterday</Text>
//                     <NotificationItem 
//                         imageSource={require('../assets/homePage/contribute.png')}
//                         title="Loan Application"
//                         description="We'll get back to you regarding your loan"
//                         time="3:40pm"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/greenbabe.png')}
//                         title="Loan Approved"
//                         description="Your loan has been approved"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/homePage/repay.png')}
//                         title="Repaid Loan"
//                         description="You repaid 20,000 in clearing your loan"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/rename.png')}
//                         title="Withdrawal"
//                         description="-20,000"
//                     />
//                 </View>

//                 {/* Last 7 Days */}
//                 <View style={styles.today}>
//                     <Text style={styles.sectionTitle}>Last 7 Days</Text>
//                     <NotificationItem 
//                         imageSource={require('../assets/homePage/contribute.png')}
//                         title="Loan Application"
//                         description="We'll get back to you regarding your loan"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/greenbabe.png')}
//                         title="Loan Approved"
//                         description="Your loan has been approved"
//                     />
//                     <NotificationItem 
//                         imageSource={require('../assets/homePage/repay.png')}
//                         title="Repaid Loan"
//                         description="You repaid N20,000 in clearing your loan"
//                     />
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// export default Notification;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#F5F7FF",
//         flex: 1,
//     },
//     con_two: {
//         backgroundColor: "#442cf5",
//         height: 125,
//         marginBottom: 20,
//     },
//     innerconttwo: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-around",
//         paddingTop: 70,
//         gap: 10,
//     },
//     smallBox: {
//         backgroundColor: "white",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 8,
//         padding: 5,
//     },
//     pay: {
//         color: "white",
//         fontSize: 18,
//         fontWeight: "bold",
//     },
//     wrapper: {
//         flexDirection: "row",
//         alignItems: "center",
//         paddingLeft: 15,
//         gap: 10,
//     },
//     partTwo: {
//         padding: 15,
//         marginLeft: 6,
//         marginRight: 6,
//         gap: 10,
//     },
//     today: {
//         gap: 10,
//     },
//     sectionTitle: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginBottom: 5,
//     },
//     todayText: {
//         padding: 20,
//         backgroundColor: "#FFFFFF",
//         borderRadius: 16,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: 10,
//         flex: 1,
//     },
//     centeredImage: {
//         width: 34,
//         height: 34.73,
//     },
//     textContainer: {
//         flex: 1,
//         flexWrap: "wrap",
//         flexShrink: 1,
//     },
//     boldText: {
//         fontWeight: "bold",
//         fontSize: 16,
//     },
// });




import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const NotificationItem = ({ imageSource, title, description, time }) => {
    return (
        <View style={styles.todayText}>
            <Image source={imageSource} style={styles.centeredImage} />
            <View style={styles.textContainer}>
                <Text style={styles.boldText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            {time ? <Text style={styles.timeText}>{time}</Text> : <Entypo name="chevron-small-right" size={24} color="black" />}
        </View>
    );
};

const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.con_two}>
                <View style={styles.innerconttwo}>
                    <View style={styles.wrapper}>
                        <View style={styles.smallBox}>
                            <Ionicons name="chevron-back" size={20} color="black" />
                        </View>
                        <Text style={styles.pay}>Notifications</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.smallBox}>
                            <Ionicons name="settings-sharp" size={24} color="#6C727F" />
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.partTwo}>
                <View style={styles.today}>
                    <Text style={styles.sectionTitle}>Today</Text>
                    <NotificationItem 
                        imageSource={require('../assets/greenircle.png')}
                        title="50% Cashback"
                        description="Get 50% cashback for Bet account funding"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/greenircle.png')}
                        title="50% Cashback"
                        description="Get 50% cashback for Bet account funding"
                    />
                </View>

                <View style={styles.today}>
                    <Text style={styles.sectionTitle}>Yesterday</Text>
                    <NotificationItem 
                        imageSource={require('../assets/homePage/contribute.png')}
                        title="Loan Application"
                        description="We'll get back to you regarding your loan"
                        time="3:40pm"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/greenbabe.png')}
                        title="Loan Approved"
                        description="Your loan has been approved"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        description="You repaid 20,000 in clearing your loan"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/rename.png')}
                        title="Withdrawal"
                        description="-20,000"
                    />
                </View>

                <View style={styles.today}>
                    <Text style={styles.sectionTitle}>Last 7 Days</Text>
                    <NotificationItem 
                        imageSource={require('../assets/homePage/contribute.png')}
                        title="Loan Application"
                        description="We'll get back to you regarding your loan"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/greenbabe.png')}
                        title="Loan Approved"
                        description="Your loan has been approved"
                    />
                    <NotificationItem 
                        imageSource={require('../assets/homePage/repay.png')}
                        title="Repaid Loan"
                        description="You repaid N20,000 in clearing your loan"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F7FF",
        flex: 1,
    },
    con_two: {
        backgroundColor: "#442cf5",
        height: 125,
        marginBottom: 20,
    },
    innerconttwo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 70,
        gap: 10,
    },
    smallBox: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        padding: 5,
    },
    pay: {
        color: "white",
        fontSize: 16, // Reduced from 18
        fontWeight: "bold",
    },
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        gap: 10,
    },
    partTwo: {
        padding: 15,
        marginLeft: 6,
        marginRight: 6,
        gap: 10,
    },
    today: {
        gap: 10,
    },
    sectionTitle: {
        fontSize: 14, // Reduced from 16
        fontWeight: "bold",
        marginBottom: 5,
    },
    todayText: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        flex: 1,
    },
    centeredImage: {
        width: 40, // Increased slightly
        height: 40,
    },
    textContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexShrink: 1,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 14, // Reduced from 16
    },
    descriptionText: {
        fontSize: 12, // Reduced for description text
        color: "#6C727F",
    },
    timeText: {
        fontSize: 12, // Reduced for time
        color: "#6C727F",
    },
});
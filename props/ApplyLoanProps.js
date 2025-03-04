import { StyleSheet, View, Image, Text} from "react-native"

const ApplyLoanProps = ({applyText, applyPrice, applyImage}) => {
    return (
        <View style = {styles.applyContainer}>
            <Image style = {styles.applyImg} source = {applyImage}/>
            <View style = {styles.applyTesx}>
            <Text style = {styles.apply}>{applyText}</Text>
            <Text style = {styles.applyT}>{applyPrice}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     applyContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
     },
     apply: {
        fontWeight: 400,
     },
     applyTesx: {
       flexDirection: "column",
       gap: 3
     },
     applyImg: {
        width: 42,
        height: 40.73,
     },
     applyT: {
        width: 300,
        fontSize: 13,
        fontWeight: 200,
        textAlign: "left",
     }
})

export default ApplyLoanProps
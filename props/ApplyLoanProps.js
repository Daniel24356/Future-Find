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
        width: 308,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
     },
     apply: {
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 18,
        color: "#292B2D"
     },
     applyTesx: {
      width: 264,
      height: 45,
       flexDirection: "column",
       gap: 3
     },
     applyImg: {
        width: 34,
        height: 34.73,
     },
     applyT: {
        width: 264,
        fontSize: 13,
        fontWeight: 400,
        textAlign: "left",
        color: "#6C727F"
     }
})

export default ApplyLoanProps
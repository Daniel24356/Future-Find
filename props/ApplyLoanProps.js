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
      width:'100%',
        height: 46,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      //   backgroundColor:'red'
     },
     apply: {
        fontWeight: 500,
        fontSize:12,
        color:'#292B2D'
     },
     applyTesx: {
      width:265,
       gap: 3,
       paddingRight:20
      // backgroundColor:'red'
     },
     applyImg: {
        width: 34,
        height: 34,
     },
     applyT: {
        fontSize: 10,
        color:'#6C727F'
     }
})

export default ApplyLoanProps


const WithdrawInputProps = ({placeholder, img}) => {
    return(
        <>
         <View>
            <TextInput placeholder={placeholder} keyboardType="text"/>
            <Image
            source={img} 
            />
            </View>
        </>
    )
}

export default WithdrawInputProps
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName: 'python',
        fileName : 'py'
    },
    {
        languageName: 'javascript',
        fileName: 'js'
    },
    {
        languageName: 'ruby',
        fileName: 'rb'
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
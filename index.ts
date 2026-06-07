import express from 'express'



const app = express()
app.use(express.json())



app.get("/teste", (req, res) => {
    return res.status(200).json(
        {
            success:true,
            message:"success"
        }
    )
})

app.get("/locations", (req, res) => {
    return res.status(200).json(
        {
            success:true,
            message:"locations"
        }
    )
})

app.get("/user", (req, res) => {
    return res.status(200).json(
        {
            success:true,
            message:"user"
        }
    )
})


app.listen(8080, () => {
    console.log("Server rodando na porta 8080")
})

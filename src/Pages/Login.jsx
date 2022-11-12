import { useState, useEffect } from 'react'
// import { FaSignInAlt } from 'react-icons/fa'
// import { FaUser } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Avatar, Grid, Paper, Typography , TextField, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box } from '@mui/system'
import { BaseUrl } from '../Utils/BaseUrl'


// import "../components/Login.css"
function Login() {
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
    const navigate = useNavigate()

    const obj={
        email,
        password,
    };



    const onSubmit =async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${BaseUrl}/api/users/login`,obj);
            if (response.data.Success) {
              toast.success(response.data.message);
              localStorage.setItem("token", response.data.data);
              navigate("/Dashboard");
            } else {
              toast.error("login error");
            }
          } catch (error) {
         
            toast.error("Something went wrong");
          }
        };

   


    const paperStyle = { padding: '30px 20px', width: 300, margin: '150px auto', }
    const headerStyle = { margin: "10px 0", }
    const avatarStyle = { backgroundColor: '#1bbd72' }

    return (
        <>
            <div >
                <Grid >
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}>
                                <LockOpenIcon />
                            </Avatar>
                            <h2 style={headerStyle} >Login</h2>
                        </Grid>
                        <form onSubmit={onSubmit}>
                            <TextField label='Email' type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)} fullWidth sx={{ margin: "5px 0" }} />
                            <TextField label='Password' fullWidth type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} sx={{ margin: "5px 0" }} />


                            <Box align="center" sx={{ margin: "10px 0" }}>
                                <Button type="submit" variant="contained" color="primary" align="center">Login</Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </div>
        </>
    )
}
export default Login
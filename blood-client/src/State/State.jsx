
import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";  
import { API_ADDRESS } from "../API/API";

export const GlobalState = createContext();

// wrap this function name on app component
export const MyState = ({ children }) => {

  // const API = 'http://localhost:8000/api'
  // const API = 'https://blood-donation-rzj3.onrender.com/api'
const API = API_ADDRESS

  //  reuseble state all are components
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false)

  //  state with data from backend 

  const [admin, setAdmin] = useState([])
  const [oneBlog, setOneBlog] = useState([])
  const [volunteer, setVolunteer] = useState([])
  const [sliders, setSlider] = useState([])
  const [logo, setLogo] = useState([])
  const [colorPalate, setColorPalate] = useState([])


  // const token = JSON.parse(localStorage.getItem("token"));
  const ADMIN_TOKEN = JSON.parse(localStorage.getItem("ADMIN_TOKEN"));


  const [token, setToken] = useState(null);

  useEffect(() => {

    const storedToken = Cookies.get('BLOOD_USER_TOKEN');

    if (storedToken) {
      const parseToken = JSON.parse(storedToken)
      setToken(parseToken)
    }
  }, [token]);

  // 0000 admin start


  const handleGetAllAdmin = () => {
    setIsLoading(true)
    fetch(`${API}/admin/admins`)
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setAdmin(data)
      })
  }

  const handleRegisterAdmin = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/admin/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleAdminLogin = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/admin/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
        if (data.login) {
          localStorage.setItem("ADMIN_TOKEN", JSON.stringify(data.token))
        }
      })
  }

  const handleAdminResetPassword = (e, authInfo) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/admin/reset/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setIsLoading(false)
      })
  }


  // 000  admin end



  // get login donar info start


  const handleUserResetPassword = (e, authInfo) => {
    setIsLoading(true)
    e.preventDefault();
    fetch(`${API}/users/reset/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(authInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
  }



  //1111 donar/ user auth account reset password handler end here ///////////////////




  //  add blog admin
  const handleAddBlogAdmin = (e, blogInfo) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/blogs/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(blogInfo)
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
  }


  const getOneBlogAdmin = () => {
    fetch(`${API}/blogs/blogs-one`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      }
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setOneBlog(data.blogs);
        console.log("staet", data)
      })
  }



  const [profileArrow, setProfileArrow] = useState(false)


  const [getData, setGetData] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const [posting, setPosting] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [deleting, setDeleting] = useState(false)


  // no use / delete letter
  const handleGetData = async (API_KEY) => {
    setGetData((prevState) => ({ ...prevState, loading: true }));

    try {
      const res = await fetch(API + API_KEY, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      setGetData((prevState) => ({
        ...prevState,
        loading: false,
        data: result,
        error: null,
      }));


    } catch (error) {
      setGetData((prevState) => ({
        ...prevState,
        loading: false,
        error: "Cannot Fetch Data",
        data: null,
      }));
    }
  };



  const postHandler = async (API_KEY, formData) => {

    setPosting(true)
    try {

      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }


      const response = await fetch(API + API_KEY, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      });


      const result = await response.json();
      setUpdating(false);
      result.ok ? toast.success(result.message) : toast.error(result.message)

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setPosting(false)
    }
  }

  const editHandler = async (API_KEY, formData) => {
    setUpdating(true)

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }


      const response = await fetch(API + API_KEY, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setUpdating(false);
      toast.success("Update successful!");

    } catch (error) {

      console.log(error)
      toast.error(error.message)
      setUpdating(false)

    } finally {

      setUpdating(false)

    }
  }

  const deleteHandler = async (API_KEY) => {
    setDeleting(true)
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }


      const response = await fetch(API + API_KEY, {
        method: "DELETE",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result)
      setDeleting(false);
      result.ok ? toast.success(result.message) : toast.error(result, message)

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    } finally {
      setDeleting(false)
    }
  }


  //  volunteeer start

  const handleGetVolunteer = () => {
    fetch(`${API}/volunteer/volunteer`)
      .then(res => res.json())
      .then(data => {
        setVolunteer(data.volunteer);
        setIsLoading(false)
      })
  }


  const handleGetOneVolunteer = () => {
    fetch(`${API}/volunteer/volunteer-one`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setVolunteer(data);
        setIsLoading(false)
      })
  }


  const handleAddVolunteer = (e, info) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${API}/volunteer/volunteer-add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setMessage(data.message)
      })
  }

  const handleUpdateVolunteer = (e, id, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/volunteer/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
      })
  }


  const handleDeleteVolunteer = (id) => {
    fetch(`${API}/volunteer/delete/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(data => {
        setIsDelete(!isDelete)
        setMessage(data.message)
      })
  }

  //  volunteeer end here

  // slider  start   
  const handleGetSlider = () => {
    setIsLoading(true)
    fetch(`${API}/slider/sliders`)
      .then(res => res.json())
      .then(data => {
        setSlider(data)
        setIsLoading(false)
      })
  }

  const handleAddSlider = (e, info) => {
    e.preventDefault();
    setIsLoading(true)
    fetch(`${API}/slider/add`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleSliderDelete = (id) => {
    fetch(`${API}/slider/delete/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsDelete(!isDelete)
      })
  }
  // slider  end here 

  //logo start here
  const handleGetLogo = () => {
    setIsLoading(true)
    fetch(`${API}/logo/logos`)
      .then(res => res.json())
      .then(data => {
        setLogo(data)
        setIsLoading(false)
      })
  }

  const handleAddLogo = (e, info) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(`${API}/logo/update/logo`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setMessage(data.message)
      })
  }

  const handleLogoDelete = (id) => {
    fetch(`${API}/logo/delete/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(data => {
        setMessage(data.message)
        setIsDelete(!isDelete)
      })
  }

  //logo start end here


  //   color palate start
  const handleUpdateColorPalate = (e, info) => {
    e.preventDefault();
    fetch(`${API}/color/update/colors`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  const handleGetColors = () => {
    setIsLoading(true)
    fetch(`${API}/color/colors`)
      .then(res => res.json())
      .then(data => {
        setColorPalate(data)
        setIsLoading(false)
        if (data) {
          localStorage.setItem("COLORS_PALATE", JSON.stringify(data))
        }
        document.documentElement.style.setProperty('--card-bg', data.cardBg);
        document.documentElement.style.setProperty('--card-text', data.cardText);
        document.documentElement.style.setProperty('--btn-bg', data.btnBg);
        document.documentElement.style.setProperty('--btn-text', data.btntext);
        document.documentElement.style.setProperty('--form-bg', data.formBg);
        document.documentElement.style.setProperty('--form-text', data.formText);
        document.documentElement.style.setProperty('--general-bg', data.genarelBg);
      })
  }

  //   color palate end here

  const times = (date) => {

    const utcTime = new Date(date);
    // Convert UTC time to local time
    const localTime = utcTime.toLocaleString();

    return localTime
  }


  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 3000);
  }

  const value = {
    API, token, ADMIN_TOKEN, times,
    isAdminLogin, setIsAdminLogin,
    message, setMessage, isLoading, setIsLoading, isDelete,
    handleGetAllAdmin, admin, handleRegisterAdmin, handleAdminLogin, handleAdminResetPassword, handleAddBlogAdmin, getOneBlogAdmin,
    //  usersAcc, getUserAllRegister, usersAllResgister,
    // handleDeleteUserAccount, handleUserRegister,
    // handleUserLogin, handleUserResetPassword,
    // getLoginUser, loginInfo,
    // handleDonarCreateProfiles, handleDeleteRegister, handleUpdateRegister, getLoginDonarAccount, getLoginUserAccount, registerEventUser, registerEventDonar,
    // handleAppoinment, handleAppoinmentUpdate, handleDeleteUserRegister,
    // handleAddBlog, handleGetBlogs, blogs, getOneBlog, oneBlog, handleDeleteBlog,
    // getAllDonarsItems, allDonars,
    oneBlog, setOneBlog, handleAddVolunteer, handleGetVolunteer, handleGetOneVolunteer, volunteer, handleUpdateVolunteer, handleDeleteVolunteer,
    handleGetSlider, sliders, handleAddSlider, handleSliderDelete,
    handleAddLogo, handleGetLogo, logo, handleLogoDelete,
    handleUpdateColorPalate, handleGetColors, colorPalate,



    // new 
    profileArrow, setProfileArrow,
    // handleGetData, getData,
    postHandler, posting, editHandler, updating, deleteHandler, deleting,

  };

  return (
    <GlobalState.Provider value={value}>{children}</GlobalState.Provider>
  );
};
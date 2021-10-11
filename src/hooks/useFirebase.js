import { useState } from "react";
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";


initializeFirebase();


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    // handle new user register by register button
    const handleUserRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorMsg('Password Must be 6 character long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg('Password must contain at least 2 uppercase letter');
            return;
        }
        newUserRegister(email, password);

    }

    //implement new user registration
    const newUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result?.user);
                setErrorMsg('');
                verifyEmail();
                setUserName();
            }).catch(error => {
                setErrorMsg(error.message);
            });
    }
    //user name set
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            //profile updated
        }).catch(error => {
            setErrorMsg(error.message);
        });
    }

    //verify user email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                //email verification sent
            });
    }


    //sign in with email and password by login button
    const handleUserSignIn = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorMsg('Password Must be 6 character long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg('Password must contain at least 2 uppercase letter');
            return;
        }
        singInProcess(email, password);
    }


    //sign in implementation
    const singInProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //signed in.
                setUser(result?.user);
                setErrorMsg('');
            }).catch(error => {
                setErrorMsg(error?.message);
            });
    }

    //trace the user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe;
    }, []);

    //implement sign out 
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });

    }

    //get the value from input and set the values.
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //sign in with facebook
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result?.user);
            }).then(error => {
                setErrorMsg(error?.message);
            });
    }
    // sign in with google
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }

    //sign in with github
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setErrorMsg(error.message);
            });
    }

    //sign in with twitter
    const handleTwitterSignIn = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setErrorMsg(error.message);
            });
    }

    return {
        handleUserSignIn,
        handleSignOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleUserRegister,
        handleGithubSignIn,
        handleGoogleSignIn,
        handleTwitterSignIn,
        handleFacebookSignIn,
        user,
        errorMsg
    }


}

export default useFirebase;
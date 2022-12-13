import React, { useEffect, useState } from "react";
import styles from '../../styles/Profile.module.css';
import style2 from '../../styles/Home.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Profile2() {
    const data = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('userData')) : null;

    const [user, setUser] = useState({
        isLoading: true,
        data: [],
    });

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${data.user_type === 0 ? 'worker' : 'recruiter'}/${data.id}`)
        .then((res) => {
            setUser({...user, isLoading: false, data: res.data.data});
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    return user.isLoading ? (
        <div>Loading...</div>
    ) : user.data.map((e, i) => (
        <div key={i} className={`${styles.card} bg-white rounded-2 mt-4 mb-2 mx-2 p-4 gap-2 shadow-sm d-flex flex-column`}>
            <Image className="rounded-circle align-self-center mb-2" src={`${e.photo.split('|&&|')[0]}`} width={200} height={200} alt="user pic" />
            <div className={`${style2.namaPekerja}`}>{e.name}</div>
            <div className={`${style2.jobTitle}`}>{e.job_title || "(no title)"}</div>
            <div className='d-flex flex-row gap-3 align-items-center'><FontAwesomeIcon icon={faMapMarkerAlt} style={{color: '#9EA0A5'}} /><div className={`${style2.jobType}`}>{e.city ? e.city : "none"}</div></div>
            <div className={`${style2.jobType}`}>{e.job_desk || ""}</div>
            <div className="d-flex flex-row gap-3 align-items-center mt-3">
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "20px"}} />
                <div className={`${style2.jobType}`}>{e.email}</div>
            </div>
        </div>
    ))
    
}
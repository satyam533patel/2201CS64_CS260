const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fac-recruitment-portal-main',
    port: 3307
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`firstName`, `lastName`, `email`, `password`, `category`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.category
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    });
})

app.post('/faculty_panel', (req, res) => {
    const sql = "INSERT INTO personaldetails (`firstName`, `middleName`, `lastName`, `nationality`, `DOB`, `gender`, `martialStatus`, `ID_Proof`, `fathersName`, `correspondanceAddress`, `permanentAddress`, `email`, `altEmail`, `Mobile`, `altMobile`, `landlineNo`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.nationality,
        req.body.DOB,
        req.body.gender,
        req.body.martialStatus,
        req.body.ID_Proof,
        req.body.fathersName,
        req.body.correspondanceAddress,
        req.body.permanentAddress,
        req.body.email,
        req.body.altEmail,
        req.body.Mobile,
        req.body.altMobile,
        req.body.landlineNo
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    });
})

app.post('/employment', (req, res) => {
    const sql = "INSERT INTO presentemployment (`e_position`, `e_organization`, `e_status`, `e_doj`, `e_doc`) VALUES (?)"
    const values = [
        req.body.e_position,
        req.body.e_organization,
        req.body.e_status,
        req.body.e_doj,
        req.body.e_doc,
        req.body.e_duration
    ]
    const sql1 = "INSERT INTO emp_history (`em_position`, `em_organization`, `em_doj`, `em_dol`, `em_duration`) VALUES (?)";
    const values1 = [
        req.body.em_position,
        req.body.em_organization,
        req.body.em_doj,
        req.body.em_dol,
        req.body.em_duration
    ]
    const sql2 = "INSERT INTO teaching (`t_position`, `t_employer`, `t_course`, `t_ugnpg`, `t_nostudent`, `t_doj`, `t_dol`,  `t_duration`) VALUES (?)";
    const values2 = [
        req.body.t_position,
        req.body.t_employer,
        req.body.t_course,
        req.body.t_ugnpg,
        req.body.t_nostudent,
        req.body.t_doj,
        req.body.t_dol,
        req.body.t_duration
    ]
    const sql3 = "INSERT INTO research (`r_position`, `r_institute`, `r_supervisor`, `r_doj`, `r_dol`, ``) VALUES (?)";
    const values3 = [
        req.body.r_position,
        req.body.r_institute,
        req.body.r_supervisor,
        req.body.r_doj,
        req.body.r_dol,
        req.body.i_duration
    ]
    const sql4 = "INSERT INTO as_n_ar (`aos`, `aor`) VALUES (?)";
    const values4 = [
        req.body.aos,
        req.body.aor
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json('Error');
        } else {
            db.query(sql1, [values1], (err, data) => {
                if(err){
                    return res.json('Error');
                } else {
                    db.query(sql2, [values2], (err, data) => {
                        if(err){
                            return res.json('Error');
                        } else {
                            db.query(sql3, [values3], (err, data) => {
                                if(err){
                                    return res.json('Error');
                                } else {
                                    db.query(sql4, [values4], (err, data) => {
                                        if(err){
                                            return res.json('Error');
                                        } else {
                                            return res.json(data);
                                        }
                                    })
                                }
                            }) 
                        }
                    })
                }
            })
        }
    })
})

app.post('/publications', (req, res) => {
    const sql = "INSERT INTO publication (`IJP`, `NJP`, `ICP`, `NCP`, `patent`, `book`, `chapter`) VALUES (?)";
    const values = [
        req.body.IJP,
        req.body.NJP,
        req.body.ICP,
        req.body.NCP,
        req.body.patent,
        req.body.book,
        req.body.chapter
    ]
    const sql1 = "INSERT INTO best_publication (`j_author`, `j_title`, `j_name`, `j_year`, `j_impact`, `j_doi`, `j_status`) VALUES (?)";
    const values1 = [
        req.body.j_author,
        req.body.j_title,
        req.body.j_name,
        req.body.j_year,
        req.body.j_impact,
        req.body.j_doi,
        req.body.j_status
    ]
    const sql2 = "INSERT INTO patent (`p_inventor`, `p_title`, `p_country`, `p_number`, `p_dof`, `p_status`) VALUES (?)";
    const values2 = [
        req.body.p_inventor,
        req.body.p_title,
        req.body.p_country,
        req.body.p_number,
        req.body.p_dof,
        req.body.p_status,
    ]
    const sql3 = "INSERT INTO book (`b_author`, `b_title`, `b_yop`, `b_isbn`) VALUES (?)";
    const values3 = [
        req.body.b_author,
        req.body.b_title,
        req.body.b_yop,
        req.body.b_isbn
    ]
    const sql4 = "INSERT INTO chapter (`c_author`, `c_title`, `c_yop`, `c_isbn`) VALUES (?)";
    const values4 = [
        req.body.c_author,
        req.body.c_title,
        req.body.c_yop,
        req.body.c_isbn
    ]
    const sql5 = "INSERT INTO googlescholar (`link`) VALUES (?)";
    const values5 = [
        req.body.link
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json('Error');
        } else {
            db.query(sql1, [values1], (err, data) => {
                if(err){
                    return res.json('Error');
                } else {
                    db.query(sql2, [values2], (err, data) => {
                        if(err){
                            return res.json('Error');
                        } else {
                            db.query(sql3, [values3], (err, data) => {
                                if(err){
                                    return res.json('Error');
                                } else {
                                    db.query(sql4, [values4], (err, data) => {
                                        if(err){
                                            return res.json('Error');
                                        } else {
                                            db.query(sql5, [values5], (err,data) => {
                                                if(err){
                                                    return res.json('Error');
                                                } 

                                                return res.json(data);
                                            })
                                        }
                                    })
                                }
                            }) 
                        }
                    })
                }
            })
        }
    })
})

app.post('/academic', (req, res) => {
    const sql = "INSERT INTO education (`phd_university`, `phd_department`, `phd_supervisor`, `phd_yoj`, `phd_doThesis`, `phd_doAward`, `phd_title`, `pg_degree`, `pg_university`, `pg_branch`, `pg_yoj`, `pg_yoc`, `pg_duration`, `pg_percentage`, `pg_divison`, `ug_degree`, `ug_university`, `ug_branch`, `ug_yoj`, `ug_yoc`, `ug_duration`, `ug_percentage`, `ug_divison`, `hsc_school`, `hsc_yop`, `hsc_percentage`, `hsc_divison`, `ssc_school`, `ssc_yop`, `ssc_percentage`, `ssc_divison`) VALUES (?)";
    const values = [
        req.body.phd_university,
        req.body.phd_department,
        req.body.phd_supervisor,
        req.body.phd_yoj,
        req.body.phd_doThesis,
        req.body.phd_doAward,
        req.body.phd_title,
        req.body.pg_degree,
        req.body.pg_university,
        req.body.pg_branch,
        req.body.pg_yoj,
        req.body.pg_yoc,
        req.body.pg_duration,
        req.body.pg_percentage,
        req.body.pg_divison,
        req.body.ug_degree,
        req.body.ug_university,
        req.body.ug_branch,
        req.body.ug_yoj,
        req.body.ug_yoc,
        req.body.ug_duration,
        req.body.ug_percentage,
        req.body.ug_divison,
        req.body.hsc_school,
        req.body.hsc_yop,
        req.body.hsc_percentage,
        req.body.hsc_divison,
        req.body.ssc_school,
        req.body.ssc_yop,
        req.body.ssc_percentage,
        req.body.ssc_divison
    ]
    const sql1 = "INSERT INTO addeducation (`degree`, `university`, `branch`, `yoj`, `yoc`, `duration`, `percentage`, `divison`) VALUES (?)";
    const values1 = [
        req.body.degree,
        req.body.university,
        req.body.branch,
        req.body.yoj,
        req.body.yoc,
        req.body.duration,
        req.body.percentage,
        req.body.divison
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        db.query(sql1, [values1], (err, data) => {
            if(err){
                return res.json("Error");
            }
            return res.json(data);
        });
    });
})

app.post('/submissions', (req, res) => {
    const sql = "INSERT into refree (`ref_name`, `ref_position`, `ref_association`, `ref_organization`, `ref_mail`, `ref_contact`) VALUES (?)";
    const values = [
        re.body.ref_name,
        re.body.ref_position,
        re.body.ref_association,
        re.body.ref_organization,
        re.body.ref_mail,
        re.body.ref_contact,
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json('Error');
        }
        return res.json(data);
    })
})

app.post('/professional', (req, res) => {
    const sql = "INSERT INTO professionalsociety (`name`, `membership`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.membership
    ]
    const sql1 = "INSERT INTO professionaltraining (`pttype`, `ptorganization`, `ptyear`, `ptduration`) VALUES (?)";
    const values1 = [
        req.body.pttype,
        req.body.ptorganization,
        req.body.ptyear,
        req.body.ptduration
    ]
    const sql2 = "INSERT INTO project (`sp_agency`, `sp_title`, `sp_amount`, `sp_period`, `sp_role`, `sp_status`, `cp_agency`, `cp_title`, `cp_amount`, `cp_period`, `cp_role`, `cp_status`) VALUES (?)";
    const values2 = [
        req.body.sp_agency,
        req.body.sp_title,
        req.body.sp_amount,
        req.body.sp_period,
        req.body.sp_role,
        req.body.sp_status,
        req.body.cp_agency,
        req.body.cp_title,
        req.body.cp_amount,
        req.body.cp_period,
        req.body.cp_role,
        req.body.cp_status
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        } else {
            db.query(sql1, [values1], (err, data) => {
                if(err){
                    return res.json("Error");
                } else {
                    db.query(sql2, [values2], (err, data) => {
                        if(err){
                            return res.json("Error");
                        } else {
                            return res.json(data);
                        }
                    })
                }
            })
        }
    });
})

app.post('/thesis', (req, res) => {
    const sql = "INSERT INTO phd_thesis (`phd_name`, `phd_title`, `phd_role`, `phd_status`, `phd_yoc`) VALUES (?)";
    const values = [
        req.body.phd_name,
        req.body.phd_title,
        req.body.phd_role,
        req.body.phd_status,
        req.body.phd_yoc,
    ]
    const sql1 = "INSERT INTO pg_thesis (`pg_name`, `pg_title`, `pg_role`, `pg_status`, `pg_yoc`) VALUES (?)";
    const values1 = [
        req.body.pg_name,
        req.body.pg_title,
        req.body.pg_role,
        req.body.pg_status,
        req.body.pg_yoc,
    ]
    const sql2 = "INSERT INTO ug_thesis (`ug_name`, `ug_title`, `ug_role`, `ug_status`, `ug_yoc`) VALUES (?)";
    const values2 = [
        req.body.ug_name,
        req.body.ug_title,
        req.body.ug_role,
        req.body.ug_status,
        req.body.ug_yoc,
    ]

    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        } else {
            db.query(sql1, [values1], (err, data) => {
                if(err){
                    return res.json("Error");
                } else {
                    db.query(sql2, [values2], (err, data) => {
                        if(err){
                            return res.json("Error");
                        } else {
                            return res.json(data);
                        }
                    })
                }
            })
        }
    });
})

app.post('/rel_info', (req, res) => {
    const sql = "INSERT INTO rel_info (`research`, `teaching`, `other_info`, `professional`, `journal`) VALUES (?)";
    const values = [
        req.body.research,
        req.body.teaching,
        req.body.other_info,
        req.body.professional,
        req.body.journal,
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?" ;
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        } else {
            return res.json("Failure");
        }
    });
})

app.listen(8081, ()=>{
    console.log('listening on 8081...');
})
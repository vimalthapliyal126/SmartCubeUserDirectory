import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Footer,
  Users,
  NavBar,
  AddEmployee,
  EmployeeUpdate,
  
} from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({user, signOut}) {
  console.log(user.attributes.name);
  let navigate = useNavigate();
  const [pasEmployees, setPasEmployees] = useState();
  const [updateEmployee, setUpdateEmployee] = useState();

  const [name, setName] = useState("");
  const [employeecode, setEmployeeCode] = useState("");
  const [designation, setDesignation] = useState("");
  const [sector, setSector] = useState("");
  const [reportingmanager, setReportingManager] = useState("");
  const [functionhead, setFunctionHead] = useState("");
  const [teamhead, setTeamHead] = useState("");
  const [hrbp, setHrbp] = useState("");
  const [ext, setExt] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  return (
    
    <div className="App">
      <NavBar
        width={"100%"}
        overrides={{
          image: {
            width: "45px",
            height: "45px",
            src: user?.attributes?.profile,
            style: {
              borderRadius: "50%"
            }
          },
          "Add User": {
            style: {
              cursor: "pointer",
            },
            onClick: () => {
              navigate("/new");
              setUpdateEmployee(null);
            },
          },
          "Pas User Directory": {
            style: {
              cursor: "pointer",
            },
            onClick: () => {
              navigate("/");
            },
          },
          "Button34812758": {
            style: {
              cursor: "pointer",
              color: "#00B19C",
              
            },
            onClick: () => signOut()
          },

            "Button34792738": {
              style: {
              
                color: "#000",
                pointerEvent: "none"
                
                
              },
             

            }
            ,
           
          
        }}
      />
      <section className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <Users
              pasEmployees={updateEmployee}
             
              itemsPerPage={8}
                
                overrideItems={({ item, index }) => ({
                  overrides: {
                    Button34512695: {
                      size: "small",
                      borderRadius: "0px",
                      onClick: () => {
                        setUpdateEmployee(item);
                        setName(item.name);
                        setEmployeeCode(item.employeecode);
                        setDesignation(item.designation);
                        setSector(item.sector);
                        setReportingManager(item.reportingmanager);
                        setFunctionHead(item.functionhead);
                        setTeamHead(item.teamhead);
                        setHrbp(item.hrbp);
                        setExt(item.ext);
                        setMobile(item.mobile);
                        setImage(item.image);
                        setEmail(item.email); 
                         navigate("/update");
                        // setUpdateEmployee(item);
      
                      }
                    },
                    Button29766907: {
                      size: "small",
                      borderRadius: "0px",
                      onClick: () => {
                        setPasEmployees(item);
                        navigate("/detail");
                      },
                    },
                  },
                })}
              />
            }
          />
          <Route
            path="/new"
            element={
              <AddEmployee
                style={{ textAlign: "left" }}

                overrides={{
                  
                  Button34602839: {
                  isDisabled: !updateEmployee ? true : false,
                  size: "small",
                  borderRadius: "0px",
                 
                },
                Button29766926: {
                  isDisabled: updateEmployee ? true : false,
                  size: "small",
                  borderRadius: "0px",
                 
                }
              }}
                
              
              />
            }
          />
          <Route
            path="/detail"
            element={<EmployeeUpdate pasEmployees={pasEmployees} />}
          />
           <Route
            path="/update"
            element={
            <AddEmployee pasEmployees={updateEmployee} 
            style={{ textAlign: "left" }} overrides={{
                
              image: {
                src: updateEmployee == null ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" : updateEmployee.image
              },
              TextField34602761: {
                placeholder: name,
              },
              TextField29766922: {
                placeholder: employeecode,
               
              },
              TextField29766923: {
                placeholder: designation,
              },
              TextField34602768: {
                placeholder: sector,
              },
              TextField29766924: {
                placeholder: reportingmanager,
              },
              TextField34602782: {
                placeholder: teamhead
              },
              TextField34602810: {
                placeholder: ext
              },
              TextField34602818: {
                placeholder: image
              },
              TextField34602775: {
                placeholder: functionhead
              },
              TextField34602789: {
                placeholder: hrbp
              },
              TextField34602803: {
                placeholder: mobile
              },
              TextField34602825: {
                placeholder: email
              },
              Button34602839: {
                isDisabled: !updateEmployee ? true : false,
                size: "small",
                borderRadius: "0px",
              },
              Button29766926: {
                isDisabled: updateEmployee ? true : false,
                size: "small",
                borderRadius: "0px",
               
              },
            }} />}
          />
         
        </Routes>
      </section>
      <Footer width={"100%"} /> 
    </div>
  );
}

export default withAuthenticator(App);

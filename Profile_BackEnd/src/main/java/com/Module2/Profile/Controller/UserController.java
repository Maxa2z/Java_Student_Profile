package com.Module2.Profile.Controller;

import com.Module2.Profile.Models.UserModel;
import com.Module2.Profile.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/")
public class UserController {
    @Autowired
    UserServices userServices;
//    GetOneUser
    @GetMapping("/Get/{id}")
    public ResponseEntity<List<UserModel>> GetById(@PathVariable int id){
        return userServices.GetById(id);
    }
//      GetAllData
    @GetMapping("/All")
    public ResponseEntity<List<UserModel>> getAllData(){
        return userServices.getAllData();
    }
//      CreateData
    @PostMapping("/AddData")
    public ResponseEntity<String> AddData(@RequestBody UserModel user){
        return userServices.AddData(user);
    }
//    DeleteData
    @GetMapping("/Delete/{id}")
    public ResponseEntity<String> DeleteData(@PathVariable int id){
        return userServices.DeleteData(id);
    }
//    UpdateData
    @PostMapping("/Update")
    public ResponseEntity<String> UpdateData(@RequestBody UserModel user) {
        return userServices.UpdateData(user);
    }
//    GetByEmailAndPassword
    @GetMapping("/Login/{email}/{pass}")
    public ResponseEntity<List<UserModel>> FindByEmail(@PathVariable String email ,@PathVariable String pass){
        return userServices.FindByEmail(email,pass);
    }
//    ChangePassword
    @GetMapping("/Change/Pass/{id}/{cpass}/{npass}")
    public ResponseEntity<String> Change(@PathVariable int id,@PathVariable String cpass,@PathVariable String npass){
        return userServices.ChangePassWord(id,cpass,npass);
    }
}


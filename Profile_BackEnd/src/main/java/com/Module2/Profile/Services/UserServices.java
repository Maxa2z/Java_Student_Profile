package com.Module2.Profile.Services;

import com.Module2.Profile.Models.UserModel;
import com.Module2.Profile.UserDao.UsersDaos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServices {
    @Autowired
    UsersDaos usersDaos;

    public ResponseEntity<List<UserModel>> getAllData() {
        List<UserModel> data = new ArrayList<>();
        try {
            data = usersDaos.findAll();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    public ResponseEntity<String> AddData(UserModel user) {
        try {
            Optional<UserModel> usercheck = usersDaos.findByEmail(user.getEmail());
            if (usercheck.isPresent()) {
                return new ResponseEntity<>("Allready Present", HttpStatus.BAD_GATEWAY);
            } else {
                if (user.getGender().equals("Male") || user.getGender().equals("male")) {
                    user.setProfile("https://bootdey.com/img/Content/avatar/avatar7.png");
                } else {
                    user.setProfile(null);
                }
                usersDaos.save(user);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed", HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    public ResponseEntity<String> DeleteData(int id) {
        try {
            Optional<UserModel> usercheck = usersDaos.findById(id);
            if (usercheck.isPresent()) {
                usersDaos.deleteById(id);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Failed", HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    public ResponseEntity<String> UpdateData(UserModel user) {
        try {
            Optional<UserModel> UserCheck = usersDaos.findByEmail(user.getEmail());
            if (UserCheck.isPresent()) {
                UserModel UserVal = UserCheck.get();
                System.out.println(UserVal);
                UserVal.setName(user.getName());
                UserVal.setEmail(user.getEmail());
                UserVal.setPassword(UserVal.getPassword());
                UserVal.setBio(user.getBio());
                UserVal.setContact(user.getContact());
                UserVal.setGender(user.getGender());
                if (user.getGender().equals("Male") || user.getGender().equals("male")) {
                    UserVal.setProfile("https://bootdey.com/img/Content/avatar/avatar7.png");
                } else {
                    UserVal.setProfile(null);
                }
                usersDaos.save(UserVal);
                return new ResponseEntity<>("Success", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Not Found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Fail TO UpDate", HttpStatus.BAD_GATEWAY);
        }
//        return new ResponseEntity<>("Success", HttpStatus.OK);
    }

    public ResponseEntity<List<UserModel>> GetById(int id) {
        List<UserModel> user = new ArrayList<>();
        try {
            Optional<UserModel> data = usersDaos.findById(id);
            if (data.isPresent()) {
                UserModel demouser = data.get();
                user.add(demouser);
            }
            else {
                return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    public ResponseEntity<List<UserModel>> FindByEmail(String email, String pass) {
        List<UserModel> User = new ArrayList<>();
        try{
            UserModel Userval = usersDaos.findByEmailAndPassword(email, pass);
            User.add(Userval);
        }
        catch(Exception e){
            return new ResponseEntity<>(User,HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>(User, HttpStatus.OK);
    }

    public ResponseEntity<String> ChangePassWord(int id, String cpass, String npass) {
        try{
//            String pass = cpass;
            Optional<UserModel> UserCheck = usersDaos.findById(id);
            if(UserCheck.isPresent()){
                UserModel UserVal = UserCheck.get();
                if((UserVal.getPassword().equals(cpass))){

                    UserVal.setName(UserVal.getName());
                    UserVal.setEmail(UserVal.getEmail());
                    UserVal.setPassword(npass);
                    UserVal.setBio(UserVal.getBio());
                    UserVal.setContact(UserVal.getContact());
                    UserVal.setGender(UserVal.getGender());
                    if (UserVal.getGender().equals("Male") || UserVal.getGender().equals("male")) {
                        UserVal.setProfile("https://bootdey.com/img/Content/avatar/avatar7.png");
                    } else {
                        UserVal.setProfile(null);
                    }
                }
                else{
                    return new ResponseEntity<>("User Passward Not Match",HttpStatus.BAD_GATEWAY);
                }
                usersDaos.save(UserVal);
                System.out.println(UserVal);
            }
            else{
                return new ResponseEntity<>("Not Found",HttpStatus.BAD_GATEWAY);
            }
        }catch (Exception e){
            return new ResponseEntity<>("Error Found",HttpStatus.BAD_GATEWAY);
        }
        return new ResponseEntity<>("Success",HttpStatus.OK);
    }
}

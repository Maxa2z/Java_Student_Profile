package com.Module2.Profile.UserDao;

import com.Module2.Profile.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersDaos extends JpaRepository<UserModel,Integer> {

    Optional<UserModel> findByEmail(String email);

    UserModel findByEmailAndPassword(String email, String pass);
}

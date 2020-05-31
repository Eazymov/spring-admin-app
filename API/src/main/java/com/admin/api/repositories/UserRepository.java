package com.admin.api.repositories;

import java.util.UUID;

import com.admin.api.models.user.User;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
    User findByUsername(String userName);
}

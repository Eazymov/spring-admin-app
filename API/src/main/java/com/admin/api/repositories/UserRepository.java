package com.admin.api.repositories;

import java.util.UUID;

import com.admin.api.models.User;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {}

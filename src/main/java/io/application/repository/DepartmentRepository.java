package io.application.repository;

import io.application.domain.Department;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


/**
 * Spring Data MongoDB repository for the Department entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DepartmentRepository extends MongoRepository<Department, String> {

}

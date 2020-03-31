package thiru.dev.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import thiru.dev.onlinebookstore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}

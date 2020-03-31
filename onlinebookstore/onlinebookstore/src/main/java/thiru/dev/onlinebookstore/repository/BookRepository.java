package thiru.dev.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import thiru.dev.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}

package SavingMoney.repo;

import SavingMoney.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message,Long> {
}

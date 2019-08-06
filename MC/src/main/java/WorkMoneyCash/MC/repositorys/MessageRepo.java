package WorkMoneyCash.MC.repositorys;

import WorkMoneyCash.MC.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message,Long> {
}

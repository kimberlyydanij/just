package vote;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public class DataDAO {
	
	public List<DataDTO> getData() throws Exception;

}

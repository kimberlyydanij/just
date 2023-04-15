package vote;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Component 
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class DataDTO {
	
	private String kakao;
	private String mnet;
	private int vote_date;
	private int vote_hour;
	private int vote_min;
	private String filename;
	private String writer;

}

package part03.dto;

import java.util.List;

public class LocDTO {
	private int Location_id;
	private String city;
	private List<LocDTO> locList;
	
	public LocDTO() {

	}

	public List<LocDTO> getLocList() {
		return locList;
	}
	
	public void setLocList(List<LocDTO> locList) {
		this.locList = locList;
	}

	
	public int getLocation_id() {
		return Location_id;
	}

	public void setLocation_id(int location_id) {
		Location_id = location_id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}



} // end class


package coding_test;

import java.util.Scanner;

public class T27889 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String a = sc.next();
		sc.close();
		if(a=="NLCS") 
				System.out.println("North London Collegiate School");
		else if(a=="BHA")
			System.out.println("Branksome Hall Asia");
		else if(a=="KIS")
			System.out.println("Korea International School");
		else if(a=="SJA")
			System.out.println("St. Johnsbury Academy");
	}
}

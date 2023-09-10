package coding_test;

import java.util.Scanner;

public class T16099 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = 0;i < n;i++) {
			long a = sc.nextLong();
			long b = sc.nextLong();
			long c = sc.nextLong();
			long d = sc.nextLong();
		if(a*b == c*d)
			System.out.println("Tie");
		else if(a*b > c*d)
			System.out.println("TelecomParisTech");
		else 
			System.out.println("Eurecom");
		}
		sc.close();
	}
}

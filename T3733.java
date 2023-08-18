package coding_test;

import java.util.Scanner;

public class T3733 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		while(sc.hasNext()) {
			int a = sc.nextInt();
			int b = sc.nextInt();
			if(b>=a)
				System.out.println(b/(a+1));
			else System.out.println(0);
		}
		sc.close();
	}
}

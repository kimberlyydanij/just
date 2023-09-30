package coding_test;

import java.util.Scanner;

public class T15727 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = a % 5;
		a = a / 5;
		if(b>0)
			a = a+1;
		sc.close();
		System.out.println(a);
	}
}

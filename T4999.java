package coding_test;

import java.util.Scanner;

public class T4999 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		char a[] = sc.next().toCharArray();
		char b[] = sc.next().toCharArray();
		sc.close();
		if(a.length >= b.length )
			System.out.println("go");
		else System.out.println("no");
	}
}

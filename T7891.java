package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T7891 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		for(int i = 0;i < a;i++) {
			BigInteger b = sc.nextBigInteger();
			BigInteger c = sc.nextBigInteger();
			System.out.println(b.add(c));
		}
		sc.close();
	}
}

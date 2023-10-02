package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T15740 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger a = sc.nextBigInteger();
		BigInteger b = sc.nextBigInteger();
		sc.close();
		System.out.println(a.add(b));
	}
}

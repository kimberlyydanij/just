package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T11382 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger a = sc.nextBigInteger();
		BigInteger b = sc.nextBigInteger();
		BigInteger c = sc.nextBigInteger();
		System.out.println(a.add(b.add(c)));
	}

}

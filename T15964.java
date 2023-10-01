package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T15964 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger a = sc.nextBigInteger();
		BigInteger b = sc.nextBigInteger();
		BigInteger c = a.add(b);
		BigInteger d = a.subtract(b);
		System.out.println(c.multiply(d));
	}
}

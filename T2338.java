package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T2338 {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		BigInteger bigA = sc.nextBigInteger();
		BigInteger bigB = sc.nextBigInteger();
		System.out.println(bigA.add(bigB));
		System.out.println(bigA.subtract(bigB));
		System.out.println(bigA.multiply(bigB));
}
}

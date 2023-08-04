package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T2420 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger bigA = sc.nextBigInteger();
		BigInteger bigB = sc.nextBigInteger();
		
		if((bigA.compareTo(bigB)==1)) 
		System.out.println(bigA.subtract(bigB));
		else
			System.out.println(bigB.subtract(bigA));
	}
}

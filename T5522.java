package coding_test;

import java.math.BigInteger;
import java.util.Scanner;

public class T5522 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger sum = null;
		for(int i = 0;i < 5;i++) {
			sum = sum.add(sc.nextBigInteger());
		}
		sc.close();
		System.out.println(sum);
	}
}

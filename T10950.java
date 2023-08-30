package coding_test;

import java.util.Scanner;

public class T10950 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int[][] data;
		data = new int[a][2];
		for(int i=0;i<a;i++) {
			data[i][0] = sc.nextInt();
			data[i][1] = sc.nextInt();
		}
	   for(int j=0;j<a;j++) {
		   System.out.println(data[j][0]+data[j][1]);
	   }
	}
}

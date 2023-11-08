package cloudVandana;

public class Panagram {
	public static boolean isPangram(String str) {
		str = str.toLowerCase();
		boolean[] mark = new boolean[26];

		for (int i = 0; i < str.length(); i++) {
			char ch = str.charAt(i);
			if ('a' <= ch && ch <= 'z') {
				mark[ch - 'a'] = true;
			}
		}

		for (int i = 0; i < 26; i++) {
			if (!mark[i]) {
				return false;
			}
		}

		return true;
	}

	public static void main(String[] args) {
		String input = "The quick brown fox jumps over the lazy dog";
		boolean isPangram = isPangram(input);
		System.out.println(isPangram);
	}
}

package com.example.E_Grampanchayat.exception;

public class DirectoryNotFoundException extends RuntimeException {

    /**
	 * 
	 */
	private static final long serialVersionUID = -1889916333298251016L;

	public DirectoryNotFoundException(String message) {
        super(message);
    }

    public DirectoryNotFoundException(Long id) {
        super("Directory with ID " + id + " not found.");
    }
}

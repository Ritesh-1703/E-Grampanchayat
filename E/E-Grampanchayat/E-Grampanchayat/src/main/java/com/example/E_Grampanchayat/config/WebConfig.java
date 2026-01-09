package com.example.E_Grampanchayat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("https://e-grampanchayat-gamma.vercel.app",
                        "https://e-grampanchayat-p1j6a98wn-ritesh-dhamales-projects.vercel.app", // ADD THIS
                        "https://e-grampanchayat-git-main-ritesh-dhamales-projects.vercel.app") // ADD THIS) // ✅
                                                                                                // Updated
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}

package com.atir.airesumeanalyzer.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;

import org.springframework.stereotype.Service;

@Service
public class ResumeParserService {

    // Decide karega PDF hai ya DOCX
    public String extractText(String filePath, String contentType)
            throws IOException {

        if ("application/pdf".equals(contentType)) {

            return extractTextFromPdf(filePath);

        } else if ("application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                .equals(contentType)) {

            return extractTextFromDocx(filePath);
        }

        throw new IllegalArgumentException("Unsupported file type");
    }


    // PDF text extraction
    private String extractTextFromPdf(String filePath)
            throws IOException {

        File file = new File(filePath);

        try (PDDocument document = Loader.loadPDF(file)) {

            PDFTextStripper textStripper = new PDFTextStripper();

            return textStripper.getText(document);
        }
    }


    // DOCX text extraction
    private String extractTextFromDocx(String filePath)
            throws IOException {

        try (
            FileInputStream inputStream =
                    new FileInputStream(filePath);

            XWPFDocument document =
                    new XWPFDocument(inputStream);

            XWPFWordExtractor extractor =
                    new XWPFWordExtractor(document)
        ) {

            return extractor.getText();
        }
    }
}
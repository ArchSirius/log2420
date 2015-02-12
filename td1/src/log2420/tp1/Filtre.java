/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package log2420.tp1;

import javax.swing.text.BadLocationException;
import javax.swing.text.DocumentFilter;

/**
 * Tiré de
 * http://stackoverflow.com/questions/11838689/documentfilter-allowing-only-numbers-and-period-into-jtextfield
 * David Tunnel & Hovercraft Full of Eels, 7 août 2012
 */
public class Filtre extends DocumentFilter {

    public void replace(DocumentFilter.FilterBypass fb, int decalage, int longueur,
            String texte, javax.swing.text.AttributeSet attribut)
            throws BadLocationException {
        fb.insertString(decalage, texte.replaceAll("[^0-9.]", ""), attribut);
        // Ce filtre n'accepte que les chiffres et les points.
        // Tout autre caractère est rejeté.
    }
}

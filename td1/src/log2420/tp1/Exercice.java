/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package log2420.tp1;

/**
 *
 * @author pabone
 */
public class Exercice {
    // La question: le calcul que l'on devrait faire a l'aide de la calculatrice
    private String question;
    // La sequence d'operation attendue comme reponse
    private String sequence;
    
    /**
     * Constructeur par parametre
     * @param question La question
     * @param sequence La sequence attendue
     */
    public Exercice(String question, String sequence){
        this.question = question;
        this.sequence = sequence;
    }
    
    /**
     * Methode d'acces a la question
     * @return La question
     */
    public String obtenirQuestion(){
        return question;
    }
    
    /**
     * Methode d'acces a la sequence attendue
     * @return La sequence attendue
     */
    public String obtenirSequence(){
        return sequence;
    }
}
